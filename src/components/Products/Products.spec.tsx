import { render, screen } from "@testing-library/react";
import { Products } from "./Products";


describe('<Products /> component', () => {
  it('should display Loading... text', () => {
    render(<Products />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display first product', async () => {
    render(<Products />);

    expect(await screen.findByText('Produkt 3')).toBeInTheDocument();
  });
});