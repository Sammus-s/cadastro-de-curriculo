import { Page } from "../types/pageType";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CallIcon from '@mui/icons-material/Call';

export const pages: Page[] = [
    {caption:"Sobre Nós", link:""},  
    {caption:"Contato", children:[
      {caption:"Fale Conosco", link:"https://www.google.com"},
      {caption:"Trabalhe Conosco", link:"contato/trabalhe-conosco"},
    ]},
    {caption:"Área do Cliente", children:[
      {caption:"Suporte", link:"https://www.odoo.com/pt_BR", startIcon: SupportAgentIcon},
      {caption:"Plantão", link:"https://api.whatsapp.com/send?phone=551199999999", startIcon: CallIcon},
    ]}
  ];