import Index from "../pages/index";
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

describe("Nearley home page", () => {
  let container;

  beforeEach(() => {
    container = render(<Index />).container;
  });

  afterEach(() => {
    cleanup();
  });

  it("verify the elements are present", () => {
    expect(container.querySelector('[data-test="heading"]')).toBeInTheDocument()
    expect(container.querySelector('[data-test="nearley-input"]')).toBeInTheDocument()
    expect(container.querySelector('[data-test="check-btn"]')).toBeInTheDocument()
    expect(container.querySelector('[data-test="close-btn"]')).not.toBeInTheDocument()

    expect(container.querySelector('[data-test="heading"]').textContent).toBe('Cars')
    
    expect(container).toMatchSnapshot();
  });
});
