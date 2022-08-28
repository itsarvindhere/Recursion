public class decode {

    static int pos = 0;
    public static String decodeString(String s) {
        String result = "";
        int number = 0;
        
        for(; pos < s.length(); pos++){
            char c = s.charAt(pos);
            
            if(Character.isDigit(c)){ 
                //if character is a digit we will add it to the number
                number = (number * 10) + (c - '0');
            } else if (c == ']'){
                //If the character is a closing bracket that means we have reached the end and we have to return from here
                return result;
            } else if (c == '['){
                //If the character is an opening bracket, that means here we have to make a recursive call so that the string between the opening and closing brackets is returned
                pos++;
                String subResult = decodeString(s);
                while(number != 0){
                    result += subResult;
                    number--;
                }
            } else {
                //If none of the above cases are true then simply add the character to the result
                //This will be true for cases such as string between [ and ] or strings that are not inside any brackets and are not encoded
                result += c;
            }
        }
        
        return result;
    }
    public static void main(String[] args) {
        String s = "3[a]2[bc]";

        System.out.println("Decoded String ->" +  decodeString(s));
    }
}