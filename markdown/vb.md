Sub inicio()
    Name = Cells(2, 2)
    i = 1
    For o = 2 To 9
             i = i + 1
         Cells(o, o) = Name
                 For j = 1 To 100000000
                 Next j
                Cells(o, o) = Empty
                        

     Next o
            
            For h = 9 To 2 Step -1
                Cells(h, 9) = Name
                For k = 1 To 100000000
                Next k
                    Cells(h, 9) = Empty
                    
            Next h
            
            
            
            For e = 9 To 2 Step -1
                Cells(2, e) = Name
                For b = 1 To 100000000
                Next b
                   Cells(2, e) = Empty
            Next e
            
            
            

End Sub
