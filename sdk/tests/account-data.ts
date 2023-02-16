/// Test vectors created from a run of SnarkOS local network

const seed = new Uint8Array([94, 91, 52, 251, 240, 230, 226, 35, 117, 253, 224, 210, 175, 13, 205, 120, 155, 214, 7, 169, 66, 62, 206, 50, 188, 40, 29, 122, 40, 250, 54, 18]);
const message = Uint8Array.from([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]);
const privateKeyString = "APrivateKey1zkp8CZNn3yeCseEtxuVPbDCwSyhGW6yZKUYKfgXmcpoGPWH"
const viewKeyString = "AViewKey1mSnpFFC8Mj4fXbK5YiWgZ3mjiV8CxA79bYNa8ymUpTrw"
const addressString = "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px"
const ciphertextString = "record1qyqspnp6w0fmrr66xsx5rwh4cp2qy7c3rp0ra0rf8rqd0t8u30d28nqxqyqsqqmnjvj7a8cs2es783xmd8sc2u46essh2f7w6vm26s4cks865lq0qzszm3clnh2vlpazmcjhan74nq0rr6hrtagwnw0grkrzuevg2x8sjjy02jy";
const foreignCiphertextString = "record1qqj3a67efazf0awe09grqqg44htnh9vaw7l729vl309c972x7ldquqq2k2cax8s7qsqqyqtpgvqqyqsq4seyrzvfa98fkggzccqr68af8e9m0q8rzeqh8a8aqql3a854v58sgrygdv4jn9s8ckwfd48vujrmv0rtfasqh8ygn88ch34ftck8szspvfpsqqszqzvxx9t8s9g66teeepgxmvnw5ymgapcwt2lpy9d5eus580k08wpq544jcl437wjv206u5pxst6few9ll4yhufwldgpx80rlwq8nhssqywmfsd85skg564vqhm3gxsp8q6r30udmqxrxmxx2v8xycdg8pn5ps3dhfvv"
const foreignViewKeyString = "AViewKey1ghtvuJQQzQ31xSiVh6X1PK8biEVhQBygRGV4KdYmq4JT"
const expectedDecryptedRecordString = "{\n  owner: aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px.private,\n  gates: 550000000000000u64.private,\n  _nonce: 4324037486175223501017904251644658173467860078798396792350707407904752217504group.public\n}";

export { seed, message, privateKeyString, viewKeyString, addressString, ciphertextString, foreignCiphertextString, foreignViewKeyString, expectedDecryptedRecordString };