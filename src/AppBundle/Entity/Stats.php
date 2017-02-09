<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Stats
 *
 * @ORM\Table(name="stats")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\StatsRepository")
 */
class Stats
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\Column(name="pv", type="integer")
     */
    private $pv;

    /**
     * @var int
     *
     * @ORM\Column(name="mov", type="integer")
     */
    private $mov;

    /**
     * @var int
     *
     * @ORM\Column(name="att", type="integer")
     */
    private $att;

    /**
     * @var float
     *
     * @ORM\Column(name="def", type="float")
     */
    private $def;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set pv
     *
     * @param integer $pv
     * @return Stats
     */
    public function setPv($pv)
    {
        $this->pv = $pv;

        return $this;
    }

    /**
     * Get pv
     *
     * @return integer 
     */
    public function getPv()
    {
        return $this->pv;
    }

    /**
     * Set mov
     *
     * @param integer $mov
     * @return Stats
     */
    public function setMov($mov)
    {
        $this->mov = $mov;

        return $this;
    }

    /**
     * Get mov
     *
     * @return integer 
     */
    public function getMov()
    {
        return $this->mov;
    }

    /**
     * Set att
     *
     * @param integer $att
     * @return Stats
     */
    public function setAtt($att)
    {
        $this->att = $att;

        return $this;
    }

    /**
     * Get att
     *
     * @return integer 
     */
    public function getAtt()
    {
        return $this->att;
    }

    /**
     * Set def
     *
     * @param integer $def
     * @return Stats
     */
    public function setDef($def)
    {
        $this->def = $def;

        return $this;
    }

    /**
     * Get def
     *
     * @return integer 
     */
    public function getDef()
    {
        return $this->def;
    }
}
