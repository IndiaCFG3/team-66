var MissingDocs = function(User, Scheme) {

    //The list of documents can be maintained as an object(dictionary)
    //Key(Document_name)->Value(Reqiured/Present)
    //docs_missing will be an object of type documents(dictionary)
    //var docs_missing
    let all_docs = 1
    for (var doc_name in Scheme.docs) {
        /*if (Scheme.docs[doc_name] == 1) //This doc is required
        {
            if (User.docs[doc_name] == 0) {
                //The user doesn't have this doc
                docs_missing[doc_name] = 1
                all_docs = 0
            } else {
                docs_missing[doc_name] = 0
            }
        } else {
            //This document is not required.(Let's say -1 denotes that in the returned value)
            docs_missing[doc_name] = -1;
        }*/
        if (User.docs.find(doc_name) != true) {
            all_docs = 0
        }
    }
    if (all_docs == 1) {
        return false;
    } else {
        return true;
    }
}

var isIncomeEligible = function(User, Scheme) {
    if (User.income <= Scheme.income) {
        return true;
    } else {
        return false;
    }
}

var inSameLocation = function(User, Scheme) {
    if (User.location == Scheme.location) {
        return true;
    } else {
        return false;
    }
}

var isAgeEligible = function(User, Scheme) {
    if (User.age >= Scheme.lowerAge && User.age <= Scheme.upperAge) {
        return true;
    } else {
        return false;
    }
}

var isGenderEligible = function(User, Scheme) {

    let Genders = Scheme.gender
    for (let gender in Genders) {
        if (User.gender == gender) {
            return true;
        }
    }
    return false;
    /*if (Scheme.gender == 'ALL') {
        return true;
    } else if (Scheme.gender == 'FEMALE' && User.gender == 'FEMALE') {
        return true;
    } else {
        return false;
    }*/
}

var GenerateList = function(User, Schemes) {
    var eligible
    var all_eligible_schemes
    for (var Scheme in Schemes) {
        if (isIncomeEligible(User, Scheme) && isSameLocation(User, Scheme) && isAgeEligible(User, Scheme) && isGenderEligible(User, Scheme)) {
            not_eligible = MissingDocs(User, Scheme)
            if (!not_eligible == true) {
                all_eligible_schemes[Scheme] = 1
            } else {
                all_eligible_schemes[Scheme] = 0
                    //all_eligible_schemes[Scheme].missingDocs = eligible
            }
        } else {
            //User is not eligible,for some reason != lac of docs
            all_eligible_schemes[Scheme] = -1
                //-1 implies income mismatch or location mismatch,or gender/age issues
        }
    }
    return all_eligible_schemes
}

module.exports.MissingDocs = MissingDocs()
module.exports.GenerateList = GenerateList()
module.exports.isAgeEligible = isAgeEligible()
module.exports.isGenderEligible = isGenderEligible()
module.exports.isSameLocation = isSameLocation()
module.exports.isIncomeEligible = isIncomeEligible()