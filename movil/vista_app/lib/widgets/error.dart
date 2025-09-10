  import 'package:flutter/material.dart';

  class Error extends StatelessWidget{
  final String mensaje;
    const Error({super.key, required this.mensaje});
    @override
    Widget build(BuildContext context) {
      return Column(
        children: [
          Image.asset(
          'assets/images/error.png',
          width: 150,
          height: 150,
        ),
        const SizedBox(height: 20),
          Text(
            ("Error al guardar los datos")
          )
        ] 
      );
    }
  }