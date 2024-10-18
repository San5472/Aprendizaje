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

class Address{
  String? street;
  String? suite;
  String? city;
  int? zipcode; 
  Geo? geo;
  
  Address(Map map){
    this.street = map['street'];
    this.suite = map ['suite']; 
    this.city = map ['city'];
    this.zipcode = map ['zipcode'];
    this.geo = Geo(map['geo']);
  }
}

class Geo{
  double? lat;
  double? ing;
  
  Geo(Map map){
    this.lat = map['lat'];
    this.ing = map['ing'];
  }
}


void main() async{
  var url = Uri.https('jsonplaceholder.typicode.com/','users/2');
  print ("Espere un momento, se esta cargando el programa");
  var response = await http.get(url);
  print('Response status: ${response.statusCode}');
  print('Response body: ${response.body}');

  User user = User (response.body);
  print(user); 
} 
