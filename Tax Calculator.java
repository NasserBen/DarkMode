import java.util.Scanner;

class TaxCalculator {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        // Enter filing status
        System.out.print("Enter the filing status(0-3): ");
        int status = scan.nextInt(); // Inputed filing status

        // Enter taxable income
        System.out.print("Enter the taxable income: ");
        double income = scan.nextDouble(); //Inputed income

        double tax = 0; //Declaring and intializing

        //Selects appropriate file status
        switch (status) {
            case 0 : // Single
                tax = calculateTax(8350, 33950, 82250, 171550, 372950, income); //Calling function to calculate tax
                break;
            case 1 : // Married Filing Jointly
                tax = calculateTax(16700, 67900, 137050, 208850, 372950, income); //Calling function to calculate tax
                break;         
            case 2 : // Married Filing Seperately
                tax = calculateTax(8350, 33950, 68525, 104425, 186475, income); //Calling function to calculate tax
                break;
            case 3 : // Head of House Hold
                tax = calculateTax(11950, 45500, 117450, 190200, 372950, income); //Calling function to calculate tax
                break;
            default : System.out.println("Error: invalid inputs!"); // Light error handling
        }
        // Display result
        System.out.println("Total Tax is: $" + tax);   
    }

    // Calculate tax. Parameters are respective to order of table.
    static double calculateTax(double n1, double n2, double n3, double n4, double n5, double income) {
        double tax = 0; //Declaring and intializing
        
        tax += (income <= n1) ? income * 0.10 : n1 * 0.10;
        if (income > n1)
            tax += (income <= n2) ? (income - n1) * 0.15 : (n2 - n1) * 0.15;
        if (income > n2)
            tax += (income <= n3) ? (income - n2) * 0.25 : (n3 - n2) * 0.25;
        if (income > n3)
            tax += (income <= n4) ? (income - n3) * 0.28 : (n4 - n3) * 0.28;
        if (income > n4)
            tax += (income <= n5) ? (income - n4) * 0.33 : (n5 - n4) * 0.33;
        if (income > n5)
            tax += (income - n5) * 0.35;
        return tax; // Returns total tax
    }
}
 