package helloworld;
import java.util.HashMap;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;




public class HandleMessage {
    private static String filepath = System.getProperty("user.dir") + "/content.txt";
    private static File file;
    private static FileWriter fw;
    public static HashMap<String, BufferedWriter> filewriteobjects = new HashMap<String, BufferedWriter>();

    public static void init(){
        checkIfexists();
        file = new File(filepath);
        try {
            fw = new FileWriter(file);
        } catch (IOException e) {
            e.printStackTrace();
        }
    } 

    static void checkIfexists(){
        File myObj = new File(filepath);
        try {
            if (myObj.createNewFile()) {
                    System.out.println("File created: " + myObj.getName());
            } else {
                    System.out.println("File already exists.");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void newBuffer(String host){
        BufferedWriter bw = new BufferedWriter(fw); 
        HandleMessage.filewriteobjects.put(host, bw);

    }

    public static void appendMessageBuffer(String msg, String host){
        BufferedWriter bw = filewriteobjects.get(host);
        try {
            if(msg != ""){
            bw.append(host + ": " + msg + "\n" + "");
        }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public static void clearMessageBuffer(String host){
        BufferedWriter bw = filewriteobjects.get(host);
        try {
            bw.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
