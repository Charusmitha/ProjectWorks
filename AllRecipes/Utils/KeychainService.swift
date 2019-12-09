//
//  KeychainService.swift
//  AllRecipes
//
//  Created by Charusmitha Deshpande on 12/6/19.
//  Copyright © 2019 Charusmitha Deshpande. All rights reserved.
//

import Foundation
import KeychainSwift

class KeyChainService{
    var _keyChain = KeychainSwift()
    var keyChain: KeychainSwift{
        get{
            return _keyChain
        }
        set{
            _keyChain = newValue
        }
    }
}
