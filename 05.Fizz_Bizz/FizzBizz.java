class FizzBizz {
    public static void main(String[] args) {
        for (int i = 0; i <= 10; i++) {
            String text = "";
            if((i % 3) == 0 && i != 0) text = text.concat("Fizz");
            if((i % 5) == 0 && i != 0) text = text.concat("Bizz");
            if(text.isEmpty()) text = text.concat(Integer.toString(i));
            System.out.println(text);
        }
    }
}