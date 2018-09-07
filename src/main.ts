import { DarkcoinClient, DashdConfig } from 'darkcoin-client';


const config: DashdConfig = {
  url: 'http://localhost:19998',
  user: "dashrpc",
  password: "87deb2c6a69cae93f8898e276f9ff10f"
};

const client = new DarkcoinClient(config);

// example usage of low level 'callRPCMethod'. You can call any RPC method with this.


const methodToRun = "help";

switch (methodToRun) {
  case "help":
    client.callRPCMethod('help',[]).then((res) => {
      console.log(res.result);
    }).catch((e) => {
      console.log(e)
    });
    break;
  default:
    console.log("Choose a valid method to run");
}

