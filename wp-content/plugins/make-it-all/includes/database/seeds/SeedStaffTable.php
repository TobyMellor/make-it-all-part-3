<?php

class SeedStaffTable extends Seeder {
	protected $table = 'staff';

	/**
	 * Seed the table.
	 *
	 * @return void
	 */
	public function seed() {
		$this->sqlStatement = "
			INSERT INTO {$this->prefix}{$this->table} VALUES
				(1, 1, 'dana@makeitall.com', 'Dana Gibson', 1, 1, 0, 'Executive Officer', '(686) 917-4585', '$2y$10$L8uIKv/2kcuffgV/AkBEGu.3Q.xJv7ETpz1m59Fgs32fV7OdycbiW', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(2, 1, 'esther@makeitall.com', 'Esther Gregory', 0, 1, 1, 'Director of Recruitment and Advancement', '(121) 258-8985', '$2y$10$eTj8H5NUaUtVFlZNNacqTeOEpl1gNmnrFqNmbgsYlG5GexMCE4fS.', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(3, 2, 'noah@makeitall.com', 'Noah Parsons', 1, 0, 0, 'Dean of School of Science', '(166) 417-4736', '$2y$10$yPCjIBU6fCG0K.6yWcv8GOGkSVQUa8Gftd3ceSIU60dpJ2Yt5l.p2', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(4, 2, 'joseph@makeitall.com', 'Joseph Morgan', 1, 0, 0, 'Administrator - Student Support', '(195) 747-1759', '$2y$10$pxFoPPBQT1GYZRoeYWsmUuZd9RWQkGrlpU9E2tYk.A78vResbzMcS', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(5, 3, 'ronnie@makeitall.com', 'Ronnie Bryant', 0, 1, 0, 'IT Manager', '(775) 391-5492', '$2y$10$82nS2Ex/ouyK9Quw6.iCUuoGJaDAbkFmwKbwjsltjvg9WAxitJEUy', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(6, 3, 'latoya@makeitall.com', 'Latoya Powell', 0, 1, 1, 'Learning Support Specialist', '(251) 553-1188', '$2y$10$d6vWSkVr7Bk/B8CoIrGopuVUgw4FgP2XnwMODeVzmjHGzFjTGp5si', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(7, 2, 'amber@makeitall.com', 'Amber Waters', 1, 0, 1, 'School Administration Manager', '(706) 150-3718', '$2y$10$wrZrqBD2kPS7UyIFrz4YAesOppEaOgY4gzZ70FtbCLATDL30yKTVi', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(8, 3, 'jerry@makeitall.com', 'Jerry Rodriquez', 0, 1, 1, 'Marketing Officer', '(807) 359-7149', '$2y$10$VNpFBzGpKUW87GFhvleUC.ZTgAXbtsQChaBMfrcPwUCPDc0PGcJpi', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(9, 1, 'jeffery@makeitall.com', 'Jeffery Black', 0, 1, 0, 'Associate Dean (Enterprise)', '(904) 482-7467', '$2y$10$Lq2m3Kvry6KNkOcUDOyBWePjT/0Rerc1p7sW7poCuVVtuxvwBDqce', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(10, 1, 'jose@makeitall.com', 'Jose Shaw', 1, 0, 0, 'Technical Facilities Manager', '(971) 582-5320', '$2y$10$EmpNq0cneBlIDHN0dY/5meUrrs4Hs7uT7vghh6p5K/sLoGduphmBi', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(11, 2, 'lawrence@makeitall.com', 'Lawrence Guzman', 0, 1, 1, 'Academic Librarian', '(171) 707-4853', '$2y$10$iFUaxBiWPuV/tQOMtZUxk.uRvR/nz5EOo2pUGgN24hjD8RHFj0GCW', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(12, 1, 'jodi@makeitall.com', 'Jodi White', 1, 1, 1, 'Developer', NULL, '$2y$10$u1CYpFq8uXb.bq1pP3kcp.CU9gMDNkNJy27uv/S0xi3m07D.YoBSa', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(13, 2, 'nettie@makeitall.com', 'Nettie Cummings', 0, 0, 1, 'Operational Support Officer', '(330) 535-3680', '$2y$10$VK/9nSJ8ZbEOMN7hLTPso.Z.ZSy5.LOTv8qDo6kDKtb8ttqZ9Rw3C', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(14, 1, 'Hulk@makeitall.com', 'Bruce Banner', 1, 0, 0, 'School Administration Manager', '(159) 724-0853', '$2y$10$fKClQUX7uLlDSzf345hssOUyowN0RWHNx5kkEfwdRbLnwtc2h6wsi', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(15, 1, 'alan@makeitall.com', 'Alan Gray', 1, 1, 0, 'Administrator - Student Support', '(930) 705-6101', '$2y$10$5gaAo5hnKAOBnEB4Q4Q3.evb.uMYJW/NDqzQYuo2WiNTVU6dMw6Ku', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(16, 1, 'vernon@makeitall.com', 'Vernon Briggs', 1, 0, 0, 'Academic Librarian ', '(268) 898-9211', '$2y$10$.uFkyMSJWkVQyoUHMpHRHupXtTLJk9P3CHVA99hR3EsKGJwXO0pb6', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(17, 2, 'valerie@makeitall.com', 'Valerie Bowman', 0, 0, 1, 'Foundation Team Leader', '(655) 156-4522', '$2y$10$GejxEfWYsiD9YdxmoC0cCuVXCP/IPlVpxFFIP7E5v5dMn5yda4np6', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(18, 2, 'joanne@makeitall.com', 'Joanne Lopez', 0, 1, 0, 'Support Administrator - Finance', '(880) 222-2186', '$2y$10$AxMzW8kZkTU5nsXX6nxWWeWZdkZ0fDNO8W0Q0j1et89Vuc4uunmMm', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(19, 1, 'dawn@makeitall.com', 'Dawn Pearson', 1, 0, 0, 'Executive Officer', NULL, '$2y$10$tg.BSSWSoqEmP4nHjBBxBupYs70RQCgDAfPTveaMA8hCT..NfDFp6', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(20, 1, 'cora@makeitall.com', 'Cora Castro', 0, 0, 1, 'Operations Manager', '(139) 839-9970', '$2y$10$7R52LfeC5hvv3zppy3.HA.Zc6jDPQoPTLZz1/4maU3Efzj3Db4602', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(21, 1, 'karl@makeitall.com', 'Karl Stone', 0, 1, 1, 'Administrator - Student Support', '(818) 293-7441', '$2y$10$S3aSos0nTRREfragQ2z9SeEZbkvgdUnuj52YDOA7wN0lWBzTegAju', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(22, 2, 'viola@makeitall.com', 'Viola Shelton', 1, 0, 0, 'AD(T)', '(325) 961-3649', '$2y$10$Ynhma.HBx.k3cO5d4lunduWsapJIm9PlIJFIjS04r5zDhBtdSAFFe', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(23, 2, 'SJohansson@makeitall.com', 'Scarlett Johansson', 0, 1, 1, 'Events and Marketing Coordinator', '(319) 789-4170', '$2y$10$VT91SLSs0AV/PuCc46.kre3m4QpB5Yg910triFUJ.uBu/ntbM0HYa', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(24, 1, 'arturo@makeitall.com', 'Arturo Dunn', 0, 0, 1, 'Support Administrator - PGR and Placements', '(244) 545-2110', '$2y$10$MriIu66VK4zmraVdKJTpc.0PEERVeqeDU7XKk0Y2gKeFNhncinqva', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(25, 1, 'rochelle@makeitall.com', 'Rochelle Burgess', 1, 0, 0, 'Support Administrator - Finance', '(852) 857-2975', '$2y$10$OZcfOFZb9kPSfnt2ajYINei0jn7rzbOP1iB27YGtIDeeTUWIGfDfq', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(26, 2, 'DJohnson@makeitall.com', 'Dwayne Douglas Johnson', 1, 0, 1, 'IT Specialist', '(580) 950-4433', '$2y$10$wS457NsxqcJTC.E.hB8mnO6NWGbkvswgqx/dNRm1LGGKOCd.FLaZG', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(27, 1, 'sabrina@makeitall.com', 'Sabrina Hunt', 1, 0, 0, 'Administrator - Student Support', '(672) 279-6442', '$2y$10$kFjD.UxQRXKtn.GKAxy9PuR6pGG/L2bEZ2p1BP9gSM/u9MEVHej6C', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(28, 1, 'fannie@makeitall.com', 'Fannie Parker', 1, 1, 1, 'Manager of Foundation Programme', '(324) 262-2770', '$2y$10$bGK9rL7eSy7LE4bFRLKbTu9uyPLS.CC7DV6OjatkSsHCgtl2ZS.WK', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(29, 3, 'TStark@makeitall.com', 'Tony Stark', 0, 1, 0, 'Administrator - Student Support', '(852) 831-6226', '$2y$10$rzK4agoDyHmYmZ1X0iThXu03rZS3wqvFuEIyebo4uFYEibR4mXqBK', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25'),
				(30, 3, 'lawrencej@makeitall.com', 'Lawrence Jefferson', 1, 0, 1, 'Programme Administration Officer', '(158) 439-8382', '$2y$10$yjdmw3xcEHgmt2bxkge.Te10YPNEd2aP7eVg75hS4ydsRuVrvCi6S', 3, '2018-02-20 23:01:25', '2018-02-20 23:01:25');
		";
	}
}