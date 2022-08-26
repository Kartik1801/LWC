public with sharing class ImperativeDemo {
    @AuraEnabled(cacheable=true)
    public static contact[] getContacts(){
        try {
            Contact[] conList = [ SELECT NAME, ID, Email FROM CONTACT ];
            return conList;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
