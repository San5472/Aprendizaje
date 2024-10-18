import 'package:http/http.dart' as http;
import 'dart:convert';

class User{
  int? userId; 
  int? id; 
  String? title;
  String? body;

  User (String s){
    Map<String, dynamic> map = jsonDecode(s);
    this.userId = map['userId'];
    this.id = map['id'];
    this.title = map ['title'];
    this.body = map ['body']; 

  }
}

void main() async{
  var url = Uri.https('jsonplaceholder.typicode.com','/posts/1');
  print('calculando');
   var response = await http.get (url);
   print (response);
}