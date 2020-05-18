import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByTestId } = render(<CheckoutForm/>);
    const headerText = "Checkout Form"
    const header = getByTestId("Form-Header")
    // console.log(headerText)
    expect(header.textContent).toBe(headerText)
});

test("form shows success message on submit with form details", async () => {
    const input = 'jason'
    const { getByTestId } = render(<CheckoutForm/>);
    let inputEl = getByTestId("firstName")

    fireEvent.change(inputEl, { target: { value: input } })
    expect(inputEl.value).toBe(input)

    const submit = getByTestId("submit")
    fireEvent.click(submit)

    // const message = getByTestId("successMessage")
    // await const successName = getByTestId("success-name")

    // fireEvent.change(message),{target:{value: input}}
    await expect(getByTestId("success-name").textContent).toBe(input)
});
