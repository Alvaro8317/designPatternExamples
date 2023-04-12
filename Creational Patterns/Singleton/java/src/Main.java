import Models.Product;
import Models.ShoppingCar;

public class Main {
    public static void main(String[] args) {
        ShoppingCar shoppingCar = ShoppingCar.getInstance();
        Product product1 = new Product(1, "Termo", 43000.00F);
        Product product2 = new Product(2, "Termo2", 44000.00F);
        Product product3 = new Product(3, "Termo3", 45000.00F);
        shoppingCar.add(product1);
        shoppingCar.add(product2);
        shoppingCar.add(product3);
        System.out.println("shoppingCar = " + shoppingCar);
        /* Validations: */
//        ShoppingCar testShoppingCar = ShoppingCar.getInstance();
//        ShoppingCar testShoppingCar2 = ShoppingCar.getInstance();
//        System.out.println(shoppingCar == testShoppingCar);
//        System.out.println("testShoppingCar2 = " + testShoppingCar2);
    }
}
