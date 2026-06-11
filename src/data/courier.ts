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
  tagline: 'Compre en EE.UU., reciba en Guatemala',
  description:
    'Compras en Estados Unidos de forma fácil, rápida y segura. Llevamos sus paquetes hasta la puerta de su hogar u oficina.',
  extendedDescription:
    'Con SICSA Courier usted obtiene un casillero (P.O. Box) en Estados Unidos para comprar en sus tiendas favoritas en línea. Nos encargamos de recibir, consolidar y traer sus paquetes a Guatemala con entrega a domicilio, en oficina o recolección en nuestras instalaciones — correspondencia y mercadería en tiempo récord.',
  image: '/images/services/courier.jpg',
  imageAlt: 'Operadores de courier cargando y entregando paquetes desde una furgoneta de reparto',
  features: [
    'Casillero (P.O. Box) en Estados Unidos para compras en línea',
    'Entrega a domicilio u oficina en Guatemala',
    'Recolección en nuestras instalaciones',
    'Correspondencia y paquetes en tiempo récord',
    'Seguimiento y atención dedicada al servicio Courier',
  ],
  steps: [
    'Regístrese y obtenga su dirección P.O. Box en EE.UU.',
    'Compre en sus tiendas en línea favoritas y envíe al casillero',
    'Reciba sus paquetes en Guatemala con entrega o recolección',
  ],
  socialLinks: {
    facebook: 'https://www.facebook.com/EpBoxGuatemala',
    instagram: 'https://www.instagram.com/sicsacourier/',
  },
  whatsappPhone: COURIER_WHATSAPP_PHONE,
  whatsappPhoneDisplay: '+502 2458-4174',
};
