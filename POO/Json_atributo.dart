import 'package:http/http.dart' as http;
import 'dart:convert';

class User{
  int? id; 
  String? name;
  String? username;
  String? email;
  Address? address; 
  String? website;
  int? phone;
  Company? company;
  
  User(String s){
    Map<String, dynamic> map = jsonDecode(s);
    this.id = map['id'];
    this.name = map['name'];
    this.username = map ['username'];
    this.email = map['email'];
    this.address = new Address(map['address']);
    this.website = map['website']; 
    this.phone = map['phone'];

    Map company = map['company'];
    this.company = Company(company); 
    
  }
}
class Company{
  String? name; 
  String? catchphrase;
  String? bs; 
  
  
  Company(Map map){
    this.name = map['name']; 
    this.catchphrase = map ['catchphrase'];
    this.bs = map['bs'];
  }

}