<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <div>Hello bitsharesjs-ws</div>

    <div style="padding-top: 20px" id="success"></div>

    <div style="padding-top: 20px">
        <table>
            <tbody id="dynamic_global"></tbody>
        </table>
    </div>

    <script type="text/javascript" src="tpl/bitsharesjs-ws.js"></script>
    <script type="text/javascript" src="tpl/bitsharesjs.js"></script>
    <script type="text/javascript">
        import {Apis} from "bitsharesjs-ws";
        import {ChainStore} from "../lib";

        Apis.instance("wss://bitshares.openledger.info/ws", true).init_promise.then((res) => {
            console.log("connected to:", res[0].network);
                ChainStore.init().then(() => {
                ChainStore.subscribe(updateState);
            });
        });

        let dynamicGlobal = null;
        function updateState(object) {
            dynamicGlobal = ChainStore.getObject("2.1.0");

            console.log("ChainStore object update\n", dynamicGlobal ? dynamicGlobal.toJS() : dynamicGlobal);
        }


    </script>
</body>
</html>
