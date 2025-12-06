import java.util.*;

class Main {
    public static void main(String[] args) {
        Stack<String> stack= new Stack<String>();
        
        stack.push("riyas");
        stack.push("nadhil");
        stack.push("shanu");
        stack.push("chechu");
        stack.push("sameer");
        
        String popped = stack.pop();
        System.out.println(stack);
        System.out.println(popped);
        
        String peeked = stack.peek();
        System.out.println(stack);
        System.out.println(peeked);
        
        System.out.println(stack.empty());
        System.out.println(stack.search("chechu"));
    }
}