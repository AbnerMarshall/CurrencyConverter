# Currency Converter

This is a simple currency converter project, using HTML, CSS, and JavaScript. It allows you to select a currency you own, input the amount you want to convert, and select the currency you want to convert it to. The converter supports Euro, US Dollar, Canadian Dollar, Bitcoin, and Ethereum.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You should have a modern web browser installed that supports HTML5, CSS, and JavaScript. 

### Installation

1. Clone the repo on your local machine using 

    ```sh
    git clone https://github.com/AbnerMarshall/CurrencyConverter.git
    ```

2. Navigate to the directory where you cloned the repository

    ```sh
    cd CurrencyConverter
    ```
3. Open the `index.html` file in your web browser.

## Usage

1. Select the currency you currently own from the first dropdown labeled 'Currency on hand'.
2. Enter the amount you want to convert in the 'Amount' field.
3. Select the currency you want to convert to from the second dropdown labeled 'Convert to'.
4. The converted value will appear automatically in the 'Conversion Value' field.

## Files

- `index.html`: This file contains the HTML for the currency converter form.
- `style/style.css`: This file contains the CSS that styles the currency converter form.
- `Jscript/myscript.js`: This JavaScript file contains the `priceChange()` function which performs the currency conversion. This function gets triggered whenever there is a change in the form. The `priceChange()` function does the following:
  - Fetches the values from the two dropdowns and the amount field.
  - Loops through an array of currencies with their conversion rates.
  - Determines the conversion rate from the first currency to the second currency.
  - If the amount, first currency, or second currency fields are empty, it highlights these fields.
  - If the fields are not empty, it performs the conversion and displays the result in the 'Conversion Value' field.
  - If a field is in error it will appear red, otherwise it will appear green.

## Contact

AbnerMarshall@outlook.com

## Acknowledgements

* [Google Fonts](https://fonts.google.com/) for the 'Quicksand' font.
