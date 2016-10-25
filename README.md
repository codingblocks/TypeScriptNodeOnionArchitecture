# TypeScriptNodeOnionArchitecture
A sample application using onion architecture with TypeScript and NodeJS

# Domain.Entities
The inner most layer of the onion.  These are the domain models / entities.  Anything can include them as a dependency but they should reference nothing else.