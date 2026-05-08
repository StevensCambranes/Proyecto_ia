% Hechos: video(palabra_clave, id_cloudinary).

video(a, 'Letra_A_wsa4yu').
video(b, 'Letra_B_lp7mto').
video(c, 'Letra_C_txcmga').
video(ch, 'Letra_Ch_imatyc').
video(d, 'Letra_D_f3toed').
video(e, 'Letra_E_fj9yq8').
video(f, 'Letra_F_eov7zj').
video(g, 'Letra_G_xqnvjy').
video(h, 'Letra_H_lz5cpg').
video(i, 'Letra_I_ftrpp9').
video(j, 'Letra_J_fkn8vt').
video(k, 'Letra_K_oefnkl').
video(l, 'Letra_L_r6rocw').
video(ll, 'Letra_Ll_lxdluq').
video(m, 'Letra_M_p01k3k').
video(n, 'Letra_N_rypvzm').
video('ñ', 'Letra_Ñ_ktieyf').
video(o, 'Letra_O_q9lslh').
video(p, 'Letra_P_mghs63').
video(q, 'Letra_Q_g4vdhd').
video(r, 'Letra_R_ixffvv').
video(rr, 'Letra_RR_qavly0').
video(s, 'Letra_S_bc6egu').
video(t, 'Letra_T_poffpw').
video(u, 'Letra_U_o4voln').
video(v, 'Letra_V_v37vwg').
video(w, 'Letra_W_mwanox').
video(x, 'Letra_X_jqvn8z').
video(y, 'Letra_Y_zrzjm4').
video(z, 'Letra_Z_eacv82').

% Regla: Busca el ID asociado a la palabra ingresada
buscar(Palabra, ID) :- video(Palabra, ID).