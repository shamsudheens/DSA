import java.util.*;

public class Main {
    public static void main(String[] args)
    {
        Queue<String> queue = new LinkedList<String>();
        
        queue.offer("riyas");
        queue.offer("nadhil");
        queue.offer("sameer");
        queue.offer("shanu");
        
        System.out.println(queue.size());
        System.out.println(queue.poll());
        System.out.println(queue);
        System.out.println(queue.peek());
        System.out.println(queue.contains("shanu"));
        System.out.println(queue.size());
        System.out.println(queue.isEmpty());
    }
}
