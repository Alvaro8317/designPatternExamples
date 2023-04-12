package Models;

public class Product {
    private Integer id;
    private String name;
    private Float cost;

    public Product(Integer id, String name, Float cost){
        this.id = id;
        this.name = name;
        this.cost = cost;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getCost() {
        return cost;
    }

    public void setCost(Float cost) {
        this.cost = cost;
    }

    @Override
    public String toString() {
        return "\nid: " + id + ", name: " + name + ", cost: " + cost;
    }
}
