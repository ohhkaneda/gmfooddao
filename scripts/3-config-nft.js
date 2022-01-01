import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x267154331e372054A735165940CBcc1A1F23f6B5",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "GMfoodDao NFT",
        description: "This NFT will give you access to GMfoodDao!",
        image: readFileSync("scripts/assets/GMfoodDao.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()