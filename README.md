A Blazingly fast, paradim shifting, hyper scalable, extensible websocket based client server archectecture for writing to a file.

Every client gets there own write buffer and it can be flushed by closing the connection or sending a 'flush' cmd.

### To run

1. Option A:
in one terminal...
   ```cd ./server && gradle run```
   in another terminal...
   ```cd ./client && yarn && yarn start```
2. Option B:
    run my script
    ```cd ./client && yarn && yarn start &> /dev/null & disown && cd ../server && gradle run```
    this will just run the client in the background, which is fine because theres nothing interesting going on there.

### Client usage
When you open the client page a websocket connection should automatically be established to the java server. Whenever you type in the text box it will be saved to the servers buffer.

If you would like to flush the buffer (write message contents to a file in ```/server/app/content.txt```) you can press the ```Flush Remote Buffer``` Button. But this is mostly useless because it will all be saved when you exit the page anyway.
