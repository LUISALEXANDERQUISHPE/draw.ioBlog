interface FooterProps {
  toolName: string;
  year: number;
}

export function Footer({ toolName, year }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">{toolName}</h3>
            <p className="text-primary-foreground/80 text-sm"> Aprendamos juntos y llevemos tus habilidades al siguiente nivel</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm hover:text-primary-foreground/80 transition-colors">
              Sobre nosotros
            </a>
            <a href="#" className="text-sm hover:text-primary-foreground/80 transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-sm hover:text-primary-foreground/80 transition-colors">
              Terminos y condiciones
            </a>
            <a href="#" className="text-sm hover:text-primary-foreground/80 transition-colors">
              Contactos
            </a>
          </div>
        </div>
        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          © {year} {toolName}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
