CREATE TABLE productdb (
  Number int NOT NULL,
  Category varchar(50)   NOT NULL,
  Name varchar(50)   NOT NULL,
  Price int NOT NULL,
  Description text   NOT NULL,
  Photo varchar(100)   NOT NULL,
  IsHot tinyint NOT NULL
) ;

INSERT INTO productdb (Number, Category, Name, Price, Description, Photo, IsHot) VALUES
(1, '�~�M', '�i�⦡�s�U�~�M', 990, '�H���H�a�ߨ�N���W�I�W��Ϊ����q��������s�U�~�M�A�i�⦡�]�p�C\r\n?�i��פֶq�B�����@�[������[�u�]�p�C\r\n?�ĥ�30�����B�����S��j���@�[�ʪ����}���s�毾���C\r\n?�����y�����ŵ��A�i�׹����ΡB���o�k�ʮ��C\r\n?�S�l?���M�ⰼ�����ϥΤ@������ơA����ç�n���ʡC\r\n?�i��פֶq�B���A�]���i�N���P�|�ʡC�X�~���ʮɤѮ��ܤƤj�]�ܹ�ΡC\r\n?�p�����i�⦡���ǳU�]�p�C', 'https://image.ibb.co/hD2WWo/12_409095.jpg', 1),
(2, '�~�M', '�ֽ�Ϥ�V���~�M', 1490, '��l���ϩ����ιL�몺�H����A�R���u�`�P�I�Ӱȳ��X�]�i�f�t�C\r\n?�P�@�ɪ��W�үS��줺���E�k��X�X�@���p�W�ӫ~�C\r\n?�줺���t�C���g��ֽ�Ϥ�V���~�M�C\r\n?�𶢩ΰӰȬҥi�f�t�C', 'https://image.ibb.co/cFC9HT/69_405399.jpg', 1),
(3, '�W��', 'DORAEMON �L��T�� (�u�S)', 390, 'TAKASHI MURAKAMI �� DORAEMON\r\n�q1970�~�}�l�s���H�ӡA�a�����饻�s�j�ڷQ��DORAEMON�C�H�u�гy�ݩ�A��DORAEMON�v���]�p�����A���X�F28�����N�a�A�N�H�uTHE DORAEMON�iTOKYO 2017�v���D��ı�����W���@�~�A�HT�򫬦��e�{���j�a�C', 'https://image.ibb.co/cuN9HT/00_410889.jpg', 1),
(4, '�W��', 'Dry-EX POLO�m', 390, '�t���ʶW�j��Dry-EX POLO�m�I�]�p²��B�I����ʡC\r\n?�ϥι��ɥNDry-EX�����A�H�W��H�t�ױƦ��Τ����C\r\n?�H�L���_���S�����´�k�s�@�A����Ĳ�P�ά�۵ξA�סC\r\n?�����ĥκ������ơA���ɳz��ʡC\r\n?��l�ĥάX�n���w´�����A�ŬX�K�X����C\r\n?�����ϥ��K���C\r\n?�S�f�����_�������q�A�e�{����骺�Ϊ��C\r\n?�ӷL�վ�ӻH���ɱ׫סB�S�l�e�סB�S������m�γS�������A�e�{�̾A�X�B�ʪ��X���סC\r\n?�i�N��l�߰_����l���ΡC\r\n?�S�f�P�˱ĥάX�n���w´�����A���ɥ𶢷P�C\r\n?�S�������M���u����²�]�p�C\r\n?���[�J�h�l���Ӹ`�A�i�M�߱q�ƹB�ʪ�²�����b�]�p�C', 'https://image.ibb.co/fGXn48/12_404091.jpg', 0),
(5, '�U��', '�S�żu�ʤ��J��', 1490, '�S�żu�ʤ��J�ǬJ�ξA�S���{���L�I�Ǹ}�s�W�ܤơA�󦳮ɩ|�P�C\r\n?�ĥΤ��u���Y�v�A���Y�^�_�v�]�ܰ������ůS�żu�ʥ��ơC\r\n?�}�e�Ϋe��Ǹ}���פ��P���]�p�A�ڦ��h�ˡC\r\n?Ĳ�P�X�n�A�S�O�u�����J�Ǫ��~�[�A�O�����𶢬ҥi�f�t������������J�ǡC\r\n?�ξA�����y�]�p�C\r\n?�y�����X�����u�ֱa�A�]���y���X���רΡA���ɶ���ۤ]�����Ƹ��C\r\n?�]�����O�̦^�T�A�~�P���ҧאּĲ�P�ξA���s���ˡC', 'https://image.ibb.co/jQzBWo/63_409941.jpg', 1),
(6, '�U��', '���y�毾������', 990, 'I�r���ŵ��A�i�{�u������C�W�Z�𶢧��A�諸�Ϥ򭷮毶���ȡC\r\n?�u�����Y��������C�����_�K�A�O�i²��e���C�ĥΦϤ򭷰�����P�����A���S�𶢲M�s����A�i�ۦb�f�t�C\r\n?�q�y���_�콥�\�A�W���y�ZI�r���ŵ��C\r\n?�@���ȭ���A�W�K�G�R����C\r\n?�y��������Y�ʡA�W���ӱ��ξA�n��C', 'https://image.ibb.co/eRbEj8/68_412881.jpg', 0),
(7, '����', 'AIRism U��T��(�u�S)', 390, '�l���t���A��a�M�n�ξA�C�Ϲ��a�ΫW���S�f���Z�J�I�ߡC\r\n?�ĥΦp�Ů�뻴�աA�L�u��۲M�n�ξA��AlRism�Z�J�I�ߡC\r\n?�����ֺ�´�u�A��Ĳ�X���A���z�X�G�ѰO����W���C\r\n?�l���t���A�ܵߨ��䵥�ξA������ơC\r\n?U��]�p�A��f���|�~�S�C\r\n?�U�\���|���W�Y�A��ۧ󬰦w�ߡC\r\n?��Ĳ�P�X���A��ۮɽu�����|�~�S�C', 'https://image.ibb.co/iq5kro/09_181481.jpg', 1),
(8, '����', '���f�� (10��)', 390, '²������]�p�A�n�f���諸�������f�ǡC\r\n? �i����]�Ш�}��10���Ǫ��סC\r\n?����²���]�p�A�n�f����C\r\n?�i�f�t�Ȥl�εu�ǡA�A�X�h�h����f�C', 'https://image.ibb.co/bSNn48/68_404457.jpg', 0);

select * from productdb