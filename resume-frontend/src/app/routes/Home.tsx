import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.background.paper
        })}
      >
        <Container>
          <Stack direction={'row'}
          sx={{
            minHeight:"20rem",
            justifyContent: 'center',
            '& > *': {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center', 
            }
          }}
          >
            <Box
              sx={{
                margin: "2rem",
                flexDirection: 'column',
              }}
            >
              <Typography variant="h3">NOSSA EMPRESA</Typography>
              <img alt="Logo Empresa" src="assets/Logo.png" style={{width:'10rem'}}/>
            </Box>
            <Box
              sx={{
                width: "50%"
              }}
            >
              <Typography variant='body1'>À Lorem Ipsum é uma empresa referência em nosso segmento! Com mais de X anos de experiência no mercado, nos dedicamos a oferecer produtos e serviços de alta qualidade, sempre priorizando a inovação, a excelência e a satisfação dos nossos clientes. Nosso compromisso é construir parcerias sólidas, entregando soluções que atendam às suas necessidades com eficiência e confiança. Conte conosco para superar expectativas e alcançar grandes resultados!</Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
      <hr />
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.background.paper
        })}
      >
        <Container>
          <Stack direction={'row'}
          sx={{
            minHeight:"20rem",
            justifyContent: 'center',
            '& > *': {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center', 
            }
          }}
          >
            <img alt="Temos Vagas" src="assets/temos vagas.png" style={{margin: "3rem 5rem 5rem 0rem"}}/>
            <Box
              sx={{
                width: "60%",
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center', 
              }}
              gap={"2rem"}
            >
              <Typography 
                variant="h4"
                sx={{textAlign: 'center'}}
              >
                INTERESSADO EM PARTICIPAR?</Typography>
              <Typography variant='body1'>Faça parte do nosso time! Envie seu currículo e construa sua carreira conosco!!!</Typography>
              <Button
                variant="contained"
                color="primary"
                href="contato/trabalhe-conosco"
                target="_self"
                rel="noopener noreferrer"
              >
                Incluir Currículo
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
    
  )
}

export default Home