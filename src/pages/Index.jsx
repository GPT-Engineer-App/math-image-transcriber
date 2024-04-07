import React, { useState } from "react";
import { Box, Button, Container, Heading, Image, Input, Stack, Text, Textarea, useToast } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [image, setImage] = useState(null);
  const [latexCode, setLatexCode] = useState("");
  const toast = useToast();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleConvert = async () => {
    if (!image) {
      toast({
        title: "No image selected",
        description: "Please upload an image before converting.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulating API call to process image
    // In a real app, you would send the image to a backend API for processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Dummy LaTeX code with Korean text, math formula, and image placeholder
    const dummyLatex = `
      \\documentclass{article}
      \\usepackage{kotex}
      \\usepackage{graphicx}
      
      \\begin{document}
      
      한국어 텍스트: 이것은 샘플 한국어 텍스트입니다.
      
      수학 공식: $E = mc^2$
      
      그래프:
      \\begin{figure}[h]
        \\centering
        \\includegraphics[width=0.5\\textwidth]{https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYW1wbGUlMjBncmFwaHxlbnwwfHx8fDE3MTI0OTEyNDJ8MA&ixlib=rb-4.0.3&q=80&w=1080}
        \\caption{샘플 그래프}
      \\end{figure}
      
      \\end{document}
    `;

    setLatexCode(dummyLatex);
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Math Problem Image to LaTeX Converter
      </Heading>
      <Stack spacing={6}>
        <Box>
          <Text mb={2}>Upload an image:</Text>
          <Input type="file" accept="image/*" onChange={handleImageUpload} />
        </Box>
        {image && (
          <Box>
            <Text mb={2}>Uploaded Image:</Text>
            <Image src={URL.createObjectURL(image)} alt="Uploaded" maxH={400} objectFit="contain" />
          </Box>
        )}
        <Button colorScheme="blue" size="lg" leftIcon={<FaUpload />} onClick={handleConvert} isDisabled={!image}>
          Convert to LaTeX
        </Button>
        {latexCode && (
          <Box>
            <Text mb={2}>Generated LaTeX Code:</Text>
            <Textarea value={latexCode} readOnly rows={10} />
          </Box>
        )}
      </Stack>
    </Container>
  );
};

export default Index;
