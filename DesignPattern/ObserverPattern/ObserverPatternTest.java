public class ObserverPatternTest {

    public static void main(String[] args) {

        StockMarket stockMarket = new StockMarket();

        Observer mobileUser = new MobileApp("Rahul");
        Observer webUser = new WebApp("Anjali");

        stockMarket.register(mobileUser);
        stockMarket.register(webUser);

        System.out.println("Stock Price Changed:");
        stockMarket.setStock("TCS", 3500);

        System.out.println();

        stockMarket.deregister(webUser);

        System.out.println("After Removing Web Observer:");
        stockMarket.setStock("Infosys", 1800);
    }
}