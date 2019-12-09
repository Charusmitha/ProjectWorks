//
//  StringExtension.swift
//  AllRecipes
//
//  Created by Charusmitha Deshpande on 12/6/19.
//  Copyright © 2019 Charusmitha Deshpande. All rights reserved.
//

import Foundation

extension String {
    var isEmail: Bool {
        let emailRegEx = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}"
        let emailTest = NSPredicate(format:"SELF MATCHES %@", emailRegEx)
        return emailTest.evaluate(with: self)
    }
    
}
