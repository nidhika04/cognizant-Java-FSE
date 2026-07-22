public class FinancialForecast {

    public static double predictValue(double currentValue, double growthRate, int years) {

        // Base case
        if (years == 0) {
            return currentValue;
        }

        // Recursive call
        return predictValue(currentValue, growthRate, years - 1)
                * (1 + growthRate);
    }

    public static void main(String[] args) {
        double currentValue = 10000; // Present value
        double growthRate = 0.10;    // 10% growth
        int years = 5;

        double futureValue = predictValue(currentValue, growthRate, years);

        System.out.println("Predicted Future Value: " + futureValue);
    }
}
