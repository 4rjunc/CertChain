// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Certificate is ERC721, ERC721URIStorage, Ownable {

  uint256 private _currentTokenId = 0;
  uint256 private _tokenID = 0; 
  mapping(uint256 => string) private _tokenIPFSHashes;
  mapping(string => uint8) private existingURIs;

  constructor() ERC721("Certificate", "CERT") Ownable(msg.sender) {}


  function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }


  function mintCertificate(address student, string memory ipfsHash) public onlyOwner {
        require(bytes(ipfsHash).length > 0, "IPFS hash cannot be empty");
        require(existingURIs[ipfsHash] != 1, "Certificate already minted!");

        uint256 tokenId = _currentTokenId;
        _tokenID = tokenId;
        _currentTokenId++;

        _safeMint(student, tokenId);
        _setTokenURI(tokenId, ipfsHash);
        _tokenIPFSHashes[tokenId] = ipfsHash;
        existingURIs[ipfsHash] = 1;
    }

    function tokenIDFetch() public view returns (uint256) {
        return _tokenID;
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

 
    function totalMinted() public view returns (uint256) {
        return _currentTokenId;
    }

}
