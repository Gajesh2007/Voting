import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Voting } from '../target/types/voting';

describe('Voting', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Voting as Program<Voting>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
