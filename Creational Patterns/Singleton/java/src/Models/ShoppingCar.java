package Models;
import java.util.ArrayList;

public class ShoppingCar {
    private static ShoppingCar instance;
    private ArrayList<Models.Product> products = new ArrayList<Models.Product>();

    private ShoppingCar(){
        System.out.println("Singleton created");
    }
    public void add(Product product) {
        products.add(product);
    }
    public void deleteById() {}
    public static ShoppingCar getInstance() {
        if (ShoppingCar.instance == null) {
            ShoppingCar.instance = new ShoppingCar();
        }
        return ShoppingCar.instance;
    }

    @Override
    public String toString() {
        return "" + products;
    }
}
