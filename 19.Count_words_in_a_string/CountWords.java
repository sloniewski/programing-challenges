class CountWords {
    public static void main(String []args) {
        String text = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit";
        String regex = " ";
        String[] textFromArray = text.split(regex);
        System.out.println(textFromArray.length);
    }
}