// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

/**
 * @title XRC20 Token
 * @dev This is the a XinFin Network Compatible XRC20 token.
 */

contract XRC20Token {
    string public name;
    string public symbol;
    uint8 public decimals;

    uint256 private _totalSupply;

    mapping(address => uint) private balances;
    mapping(address => mapping(address => uint)) private allowances;

    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _initialSupply
    ) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;

        _totalSupply += _initialSupply * 10 ** decimals;
        balances[msg.sender] = _totalSupply;
        emit Transfer(address(0), msg.sender, _totalSupply);
    }

    function totalSupply() public view virtual returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view virtual returns (uint256) {
        return balances[account];
    }

    function allowance(
        address owner,
        address spender
    ) public view virtual returns (uint256) {
        return allowances[owner][spender];
    }

    function transfer(address recipient, uint amount) external returns (bool) {
        balances[msg.sender] -= amount;
        balances[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint amount) external returns (bool) {
        allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external returns (bool) {
        allowances[sender][msg.sender] -= amount;
        balances[sender] -= amount;
        balances[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }
}
