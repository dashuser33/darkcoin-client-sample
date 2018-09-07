import { DarkcoinClient, DashdConfig } from 'darkcoin-client';


const config: DashdConfig = {
  url: 'http://localhost:19998',
  user: "dashrpc",
  password: "87deb2c6a69cae93f8898e276f9ff10f"
};

const client = new DarkcoinClient(config);


const methodToRun: any = "info";

switch (methodToRun) {
  case "help":
    // example usage of low level 'callRPCMethod'. You can call any RPC method with this.
    client.callRPCMethod('help',[]).then((res) => {
      console.log(res.result);
    }).catch((e) => {
      console.log(`error: ${e}`)
    });
    break;

  case "info":
    client.getWalletInfo().then((res) => {
      console.log(`Balance is ${res.result.balance} DASH`);
    }).catch((e) => {
      console.log(`error: ${e}`)
    });
    break;
  default:
    console.log("Choose a valid method to run");
}

