export interface CourierSocialLinks {
  facebook: string;
  instagram: string;
}

export interface CourierService {
  id: string;
  logoImage: string;
  title: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  image: string;
  imageAlt: string;
  features: string[];
  steps: string[];
  socialLinks: CourierSocialLinks;
  whatsappPhone: string;
  whatsappPhoneDisplay: string;
}

export const COURIER_WHATSAPP_PHONE = '50224584174';

export const COURIER_WHATSAPP_CHAT_URL = `https://api.whatsapp.com/send?phone=${COURIER_WHATSAPP_PHONE}`;

export const COURIER_WHATSAPP_URL = `https://wa.me/${COURIER_WHATSAPP_PHONE}`;

export const courierService: CourierService = {
  id: 'courier',
  logoImage: '/images/Logo_SICSA_COURIER_FINAL.png',
  title: 'Courier y P.O. Box',
  tagline: 'Tus compras a un solo clic',
  description:
    'SICSA Courier está comprometida en brindar una mejor experiencia a tus compras en línea.',
  extendedDescription:
    'Nuestro servicio garantiza efectividad en tus importaciones desde EE.UU. a Guatemala. Con tu casillero (P.O. Box) en Estados Unidos puedes comprar en tus tiendas favoritas en línea; nos encargamos de recibir, consolidar y traer tus paquetes con entrega a domicilio, en oficina o recolección en nuestras instalaciones — correspondencia y mercadería en tiempo récord.',
  image: '/images/services/courier.jpg',
  imageAlt: 'Operadores de courier cargando y entregando paquetes desde una furgoneta de reparto',
  features: [
    'Beneficios para tu casillero personal o empresarial',
    'Efectividad en tus importaciones desde EE.UU. a Guatemala',
    'Agente de compras o compras desde tu comodidad, con atención personalizada',
    'Entrega a domicilio u oficina en Guatemala',
    'Recolección en nuestras instalaciones',
    'Seguimiento y atención dedicada al servicio Courier',
  ],
  steps: [
    'Regístrate y obtén tu dirección P.O. Box en EE.UU.',
    'Compra en tus tiendas en línea favoritas y envía al casillero',
    'Recibe tus paquetes en Guatemala con entrega o recolección',
  ],
  socialLinks: {
    facebook: 'https://www.facebook.com/EpBoxGuatemala',
    instagram: 'https://www.instagram.com/sicsacourier/',
  },
  whatsappPhone: COURIER_WHATSAPP_PHONE,
  whatsappPhoneDisplay: '+502 2458-4174',
};
