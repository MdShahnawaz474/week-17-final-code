"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2Transfer";

export  function SendCard() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div className="w-auto">
      <Center>
        <Card title="Send">
        <div className="pt-2 w-[480px]">
          <TextInput
            placeholder={"Number"}
            label="Number"
            onChange={(value) => {
              setNumber(value);
            }}
          />
          <TextInput
            placeholder={"Amount"}
            label="Amount"
            onChange={(value) => {
              setAmount(value);
            }}
          />
          <div className="pt-4 flex justify-center">
            <Button onClick={async()=>{
              await p2pTransfer(number, Number(amount)*100)
            }}>Send Money
            </Button>
          </div>
        </div>
        </Card>
      </Center>
    </div>
  );
}
