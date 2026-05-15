% Hechos: video(palabra_clave, id_cloudinary).

video_abecedario(a, 'Letra_A_wsa4yu').
video_abecedario(b, 'Letra_B_lp7mto').
video_abecedario(c, 'Letra_C_txcmga').
video_abecedario(ch, 'Letra_Ch_imatyc').
video_abecedario(d, 'Letra_D_f3toed').
video_abecedario(e, 'Letra_E_fj9yq8').
video_abecedario(f, 'Letra_F_eov7zj').
video_abecedario(g, 'Letra_G_xqnvjy').
video_abecedario(h, 'Letra_H_lz5cpg').
video_abecedario(i, 'Letra_I_ftrpp9').
video_abecedario(j, 'Letra_J_fkn8vt').
video_abecedario(k, 'Letra_K_oefnkl').
video_abecedario(l, 'Letra_L_r6rocw').
video_abecedario(ll, 'Letra_Ll_lxdluq').
video_abecedario(m, 'Letra_M_p01k3k').
video_abecedario(n, 'Letra_N_rypvzm').
video_abecedario('ñ', 'Letra_Ñ_ktieyf').
video_abecedario(o, 'Letra_O_q9lslh').
video_abecedario(p, 'Letra_P_mghs63').
video_abecedario(q, 'Letra_Q_g4vdhd').
video_abecedario(r, 'Letra_R_ixffvv').
video_abecedario(rr, 'Letra_RR_qavly0').
video_abecedario(s, 'Letra_S_bc6egu').
video_abecedario(t, 'Letra_T_poffpw').
video_abecedario(u, 'Letra_U_o4voln').
video_abecedario(v, 'Letra_V_v37vwg').
video_abecedario(w, 'Letra_W_mwanox').
video_abecedario(x, 'Letra_X_jqvn8z').
video_abecedario(y, 'Letra_Y_zrzjm4').
video_abecedario(z, 'Letra_Z_eacv82').

% Regla: Busca el ID asociado a la palabra ingresada
buscar_abecedario(Palabra, ID) :- video_abecedario(Palabra, ID).