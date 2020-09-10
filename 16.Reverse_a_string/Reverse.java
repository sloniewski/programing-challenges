class Reverse {
    public static void main(String[] args) {
        String text = "abcde";
        String reversed = "";
        for(int i = text.length() - 1; i >= 0; i--) {
            reversed = reversed.concat(Character.toString(text.charAt(i)));
        }
        System.out.println(reversed);
    }
}