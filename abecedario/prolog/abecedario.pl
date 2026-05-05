% Hechos: video(palabra_clave, id_cloudinary).

video(alegre, 'Alegre_sep4kx').
video(actitud, 'Actitud_htst8l').
video(aburrido, 'Aburrido_lcgrty').
video(miedoso, 'Miedoso_kvzvcz').
video(llorar, 'Llorar_xkviep').
video(humilde, 'Humilde_r7kvff').
video(orgulloso, 'Orgulloso_dawhst').
video(paciencia, 'Paciencia_fzqrqz').

% Regla: Busca el ID asociado a la palabra ingresada
buscar(Palabra, ID) :- video(Palabra, ID).