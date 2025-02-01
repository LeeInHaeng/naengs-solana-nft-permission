import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { NaengsSolanaNftPermission } from "../target/types/naengs_solana_nft_permission";

describe("naengs-solana-nft-permission", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.NaengsSolanaNftPermission as Program<NaengsSolanaNftPermission>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
