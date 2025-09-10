import 'package:flutter/material.dart';

class Success extends StatelessWidget {
  final Map<String, dynamic> datos;
  const Success({super.key, required this.datos});

  @override
    Widget build(BuildContext context) {
    return Column(
      children: [ 
          Image.asset(
        'assets/images/success.png',
          width: 150,
          height: 150,
        ),
        const SizedBox(height: 20),
        Text(
          ("Los siguientes datos han sido guardados: ${datos.toString()}")
        )
      ] 
    );
  }    
}


