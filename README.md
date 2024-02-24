# lww-crdt-server

-   Socket.IO event for [lww-crdt](https://github.com/redundant4u/lww-crdt)
    -   port 3000
-   Events
    -   `init`
        -   Load the previous CRDT states
    -   `alice`
        -   Receive the CRDT state from Alice
        -   Emit the CRDT state to Bob
    -   `bob`
        -   Receive the CRDT state from Bob
        -   Emit CRDT state to Alice
    -   `clear`
        -   Clear the CRDT state

## Preview

-   [link](https://github.com/redundant4u/lww-crdt?#preview)

## Usage

### Prerequisites

-   node (tested on 18)

## Run

```bash
npm i
npm run dev
```
