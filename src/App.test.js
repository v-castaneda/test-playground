import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from './App'

test("header renders with correct text", () => {
  render(<App />)
  const headerEl = screen.getByRole("heading")
  expect(headerEl.textContent).toBe("Testing Playground") 
})

describe('test for the button', () => {
  test("button changes color when clicked", () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")
  
    userEvent.click(colorBtn)
  
    expect(colorBtn).toHaveStyle({ backgroundColor: "blue" })
    expect(colorBtn.textContent).toBe("Change button color to black")
  })
})

describe('test to check disabling of button with use of checkbox', () => {
  test('button disabled with checkbox', () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")
    const checkbox = screen.getByRole("checkbox")

    userEvent.click(checkbox)
    expect(colorBtn).toBeDisabled()

    userEvent.click(checkbox)
    expect(colorBtn).toBeEnabled()
  })
})